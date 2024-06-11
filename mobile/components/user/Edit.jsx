import { useState } from 'react';
import { View, } from 'react-native';
const styles = require('../../styles.json');
import { Button, TextInput, Text, Card, Provider, Dialog, Paragraph, Portal } from 'react-native-paper';

const Edit = props => {

  //Dialogue
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [name, setName] = useState(props.user.name);
  const [age, setAge] = useState(props.user.age);
  const submit = () => {
    props.loader();
    fetch(`http://localhost:3000/people/${props.user.id}`,
      { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: props.user.id, name, age }) }
    )
      .then(r => r.json())
      .then(j => props.success(j))
      .catch(e => console.error(e.message))
      .finally(() => props.close())
  }

  return (
    <View>
      <Card contentStyle={{ padding: 20 }}>
        <Card.Title title={"Update " + (name)}> </Card.Title>
        <Text variant='labelLarge' style={{ marginBottom: 2 }}>Name </Text>
        <TextInput mode="outlined" value={name} onChangeText={setName} style={{ marginBottom: 4 }} />
        <Text variant='labelLarge' style={{ marginBottom: 2 }}>Age </Text>
        <TextInput mode="outlined" value={age} onChangeText={setAge} style={{ marginBottom: 4 }} />
        <Button mode="contained" onPress={showDialog} 
        style={{ marginTop: 20, marginBottom: 4 }} icon={'update'}>
          Save
        </Button>
        <Button mode="outlined" onPress={() => props.close()}
        icon={'keyboard-return'}>
          Back
        </Button>
      </Card>

      <Provider>
        <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Updated!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>The cheese '{name}' updated</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={submit}>Done</Button>
          </Dialog.Actions>
        </Dialog>
        </Portal>
      </Provider>

    </View>
  );
}
export default Edit; 