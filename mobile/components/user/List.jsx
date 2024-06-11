import { View, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

const List = props => (
    <View>
        {props.users.map(u =>
            <View style={{ marginBottom: 4}} key={u.id}>
                <Button mode="outlined" onPress={() => props.update(u)}>
                    {u.name} {u.age} 
                    
                </Button>
            </View>)
        }
    </View>
);
export default List; 