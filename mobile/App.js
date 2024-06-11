import { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import User from './components/user';
import { Button, Text, Card, Divider } from 'react-native-paper';

export default function App() {
  //state
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState("loading");

  //use effect
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(r => r.json()).then(j => setUsers(j))
      .catch(e => console.error(JSON.stringify(e)))
      .finally(() => setCurrentView("list"))
  }, [])

  //JSX (conditional return on value of currentView state managed variable)
  if (currentView == "loading")
    return (
      <View style={styles.centered}>
        <Text variant='headlineSmall'>Loading...</Text>
      </View>
      );
  if (currentView == "list")
    return (
      <View style={styles.centered}>
        <ScrollView showsHorizontalScrollIndicator={false} style={{padding: 5, margin: -5}}>
          <Text variant='headlineMedium' style={{ marginBottom: 6 }}>Vegan Cheese&trade;</Text>

          <Card contentStyle={{ padding: 20 }}>
            <Card.Title title="Cheese List"> </Card.Title>
            <Button mode="contained" onPress={() => setCurrentView('create')}
              style={{ marginBottom: 6 }} icon="account-plus">
              Add Cheese
            </Button>
            <Button mode='contained' onPress={() => setCurrentView('donut')}
              style={{ marginBottom: 6 }} icon='chart-donut'>
              Ages Donut
            </Button>

            <Divider style={{ marginBottom: 6 }} />

            <User.List users={users} update={u => { setUser(u); setCurrentView("edit"); }} />

          </Card>
        </ScrollView>
      </View>
    );
  if (currentView == "create")
    return (
      <View style={styles.centered}>
        <Text variant='headlineMedium' style={{ marginBottom: 6 }}>Vegan Cheese&trade;</Text>
        <User.Create
          success={u => setUsers([...users, u])}
          close={() => setCurrentView("list")}
          loader={() => setCurrentView("loader")}
        />
      </View>
    );
  if (currentView == "edit")
    return (
      <View style={styles.centered}>
        <Text variant='headlineMedium' style={{ marginBottom: 6 }}>Vegan Cheese&trade;</Text>
        <User.Edit
          user={user}
          success={updatedUser => setUsers(users.map(u => u.id == updatedUser.id ? updatedUser : u))}
          close={() => setCurrentView("list")}
          loader={() => setCurrentView("loader")}
        />
      </View>
    );

  if (currentView == "donut")
    return (
      <View style={styles.centered}>
        <Text variant='headlineMedium' style={{ marginBottom: 6 }}>Vegan Cheese&trade;</Text>
        <User.Donut users={users} 
          close={() => setCurrentView("list")}
          loader={() => setCurrentView("loader")}/>
      </View>
    );
}

const styles = StyleSheet.create({
  centered: {
    marginHorizontal: 'auto',
    width: 220,
  }
});

/**
 * Idea:
 * Visualise the ages of the people, split by age bracket
 * Select groups to list who's part of which bracket
 */
