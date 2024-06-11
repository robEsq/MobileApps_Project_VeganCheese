
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { PieChart } from "react-native-gifted-charts";


const Donut = props => {

    const usersList = props.users
    const ageList = [0, 0, 0, 0, 0, 0];

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

    const pieData = [
        { value: ageList[0], color: '#5fb3e3', text: '<0' },
        { value: ageList[1], color: '#ebdb67', text: '0-17' },
        { value: ageList[2], color: '#db1d49', text: '18-39' },
        { value: ageList[3], color: '#23ba4e', text: '40-69' },
        { value: ageList[4], color: '#3043ba', text: '70-100' },
        { value: ageList[5], color: '#fa39ea', text: '>100' },
    ]



    console.log(ageList);

    return (
        <View>
            <Card contentStyle={{ padding: 20 }}>
                <Card.Title title='Age Bracket Donut'></Card.Title>

                <PieChart
                    donut
                    isThreeD
                    showText
                    textColor="white"
                    radius={80}
                    textSize={12}
                    textBackgroundRadius={26}
                    data={pieData}
                />

                <Text variant='bodySmall'>Wow this is ugly -_-</Text>
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