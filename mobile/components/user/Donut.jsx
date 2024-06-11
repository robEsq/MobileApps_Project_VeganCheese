
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';


const Donut = props => {

    let usersList = props.users
    let ageList = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < usersList.length; i++) {
        //console.log(usersList[i].age);
        if (usersList[i].age < 0) {
            ageList[0] += 1;
        } else if (usersList[i].age >= 0 && usersList[i].age <= 17) {
            ageList[1] += 1;
        } else if (usersList[i].age >= 18 && usersList[i].age <= 39) {
            ageList[2] += 1;
        } else if (usersList[i].age >= 40 && usersList[i].age <= 69) {
            ageList[3] += 1;
        } else if (usersList[i].age >= 70 && usersList[i].age <= 100) {
            ageList[4] += 1;
        } else if (usersList[i].age > 100) {
            ageList[5] += 1;
        }
    }

    console.log(ageList);

    return (
        <View>
            <Card contentStyle={{ padding: 20 }}>
                <Card.Title title='Age Bracket Donut'></Card.Title>

                <Text variant='bodySmall'>&#62;Insert donut data right here&#60;</Text>
                <Text>https://gifted-charts.web.app/barchart</Text>

                <Button mode="outlined" onPress={() => props.close()}
                    icon={'keyboard-return'}>
                    Back
                </Button>
            </Card>
        </View>
    );
};

export default Donut;