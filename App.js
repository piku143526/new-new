import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import { BluetoothEscposPrinter, BluetoothManager } from 'react-native-bluetooth-escpos-printer';
import { hsdLogo } from './dummy-logo';

Index = ({navigation}) => {
  //States value
  const [email, setEmail] = useState('');
  
  //following function run on comp load
  useEffect(() => {
    //checkBlueToothStatus();
    //enableBlueToothStatus();
    getDeviceList();
  },[]);

  //functon for check blue tooth status
  const checkBlueToothStatus = async () => {
    const isEnabled = await BluetoothManager.checkBluetoothEnabled();
    console.log(isEnabled); // true/false
  }

  //functon for enable blue tooth status
  const enableBlueToothStatus = async () => {
    const devices = await BluetoothManager.enableBluetooth();
    return devices
      .reduce((acc, device) => {
        try {
          return [...acc, JSON.parse(device)];
        } catch (e) {
          return acc;
        }
      }, [])
      .filter((device) => device.address);
  }

  const getDeviceList = async () => {
    BluetoothManager.scanDevices()
      .then((s)=> {
          console.log('vishalWasHere123');
          var ss = JSON.parse(s);//JSON string
          console.log(ss);
      }, (er)=> {
        this.setState({
            loading: false
        })
        alert('error' + JSON.stringify(er));
    });
  }

  const connectBlueToothPrinter = async() => {
      BluetoothManager.connect('04:7F:0E:06:1E:DE') // the device address scanned.
      .then((s)=>{
        console.log(JSON.stringify(s));
    },(e)=>{
        alert(e);
    })
  }

  return (
    <View>
      <View>
      <Text>Sample Print Instruction</Text>
      <View style={styles.btn}>
        <Button
          onPress={async () => {
            await BluetoothEscposPrinter.printerUnderLine(2);
            await BluetoothEscposPrinter.printText('Prawito Hudoro\r\n', {
              encoding: 'GBK',
              codepage: 0,
              widthtimes: 0,
              heigthtimes: 0,
              fonttype: 1,
            });
            await BluetoothEscposPrinter.printerUnderLine(0);
            await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          }}
          title="Print UnderLine"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Print Struk Belanja"
          onPress={async () => {
            let columnWidths = [8, 20, 20];
            try {
              await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
              await BluetoothEscposPrinter.printColumn(
                [37],
                [BluetoothEscposPrinter.ALIGN.CENTER],
                ['MOHAN BHAI FAST FOOD'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [32],
                [BluetoothEscposPrinter.ALIGN.CENTER],
                ['https://MohanBhaiFastFood.COM'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Customer', 'Vishal Singh'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Packaging', 'Mohan B'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Delivery', 'Mohan Bhai'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printText('Products\r\n', { widthtimes: 1 });
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                columnWidths,
                [
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.RIGHT,
                ],
                ['1x', 'Chow-Chow', 'Rs.200.000'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                columnWidths,
                [
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.RIGHT,
                ],
                ['4x', 'PineApple', 'Rp.300.000'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                columnWidths,
                [
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.RIGHT,
                ],
                ['1x', 'Cream pie', 'Rs.400.000'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Subtotal', 'Rs.900.000'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Packaging', 'Rs.6.000'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Delivery', 'Rs.0'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Total', 'Rs.906.000'],
                {},
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            } catch (e) {
              alert(e.message || 'ERROR');
            }
          }}
        />
        <View style={styles.btn}>
          <Button
            onPress={()=>connectBlueToothPrinter()}
            title="Connect Printer"
          />
      </View>
      </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  btn: {
    marginBottom: 8,
  },
});