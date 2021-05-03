import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScreenWidth, ScreenHeight, Price} from '../constants/index';

import Column from '../components/Column';
export default function SinhHoat(props) {
  const [input, setInput] = useState('0');
  //let money = useRef(new Array(9).fill(0)).current;
  const [pay, setPay] = useState(new Array(9).fill(0));
  const [quantity, setQuantity] = useState(new Array(6).fill(0));

  const caculate = num => {
    calQuantity(num);
    calPay()
  };
  const calQuantity = (num) => {
    let quantityTemp = new Array(6).fill(0);
    if (num >= 0 && num <= 50) {
      quantityTemp[0] = num;
    } else if (num >= 51 && num <= 100) {
      quantityTemp[0] = 50;
      quantityTemp[1] = num - 50;
    } else if (num >= 101 && num <= 200) {
      quantityTemp[0] = 50;
      quantityTemp[1] = 50;
      quantityTemp[2] = num - 100;
    } else if (num >= 201 && num <= 300) {
      quantityTemp[0] = 50;
      quantityTemp[1] = 50;
      quantityTemp[2] = 100;
      quantityTemp[3] = num - 200;
    } else if (num >= 301 && num <= 400) {
      quantityTemp[0] = 50;
      quantityTemp[1] = 50;
      quantityTemp[2] = 100;
      quantityTemp[3] = 100;
      quantityTemp[4] = num - 300;
    } else if (num >= 401) {
      quantityTemp[0] = 50;
      quantityTemp[1] = 50;
      quantityTemp[2] = 100;
      quantityTemp[3] = 100;
      quantityTemp[4] = 100;
      quantityTemp[5] = num - 400;
    } else {
      console.log('Input is incorrect');
    }
    setQuantity(quantityTemp);
  };

  const calPay = () => {
    let payTemp = new Array(9).fill(0);
    for (let i = 0; i < 6; ++i) {
      payTemp[i] = quantity[i] * Price[i];
    }
    for (let i = 0; i < 6; ++i) {
      payTemp[6] += payTemp[i];
    }
    payTemp[7] = payTemp[6] / 10;
    payTemp[8] = payTemp[6] + payTemp[7];
    setPay(payTemp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.header}
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <MaterialIcons name="more-vert" size={26} color="gray" />
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            marginLeft: ScreenWidth / 4,
          }}>
          Sinh Hoạt
        </Text>
      </Pressable>
      <View style={styles.body}>
        <View style={styles.input}>
          <Text>Điện năng tiêu thụ:</Text>
          <TextInput
            autoFocus={true}
            style={{
              flex: 1,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              height: 40,
              marginHorizontal: 10,
            }}
            keyboardType="number-pad"
            placeholder="kWh"
            onChangeText={text => {
              setInput(text);
            }}
          />
          <Button
            title="Tính"
            onPress={() => {
              caculate(parseInt(input));
            }}
          />
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.table}>
            <Column
              title={''}
              arr={[
                'Bậc 1',
                'Bậc 2',
                'Bậc 3',
                'Bậc 4',
                'Bậc 5',
                'Bậc 6',
                'Tiền điện',
                'VAT 10%',
                'Tổng',
              ]}
            />
            <Column title={'Đơn giá \n đồng/kWh'} arr={Price} />
            <Column title={'Sản lượng'} arr={quantity} />
            <Column title={'Thành tiền'} arr={pay} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenHeight / 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    marginVertical: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenHeight / 15,
  },
  tableContainer: {
    height:500,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  table:{
    flex:1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical:20
  },
  col: {
    flexDirection: 'column',
  },
  row: {
    height: ScreenHeight / 20,
  },
});