import React, { Component } from 'react';
import {
    Divider,
    List,
    Typography,
    Modal,
    Button,
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
    InputNumber,
    } from 'antd';
import { getAllReservations } from './function';
import { Container } from './Container';
import { NewReservation } from "./newReservation";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

class Customer extends Component {
    state = {
        reservations: [],
        restaurants: [],
        isAddReservationVisible: false
    }

    componentDidMount () {
        this.fetchReservations();
      }

    openNewReservation = () => this.setState({isAddReservationVisible: true})

    closeNewReservation = () => this.setState({isAddReservationVisible: false})

    fetchReservations = () => {
        this.setState({
            isAddReservationVisible: false
        });

        getAllReservations()
        .then(res => res.json()
        .then(reservations => {
            //console.log(reservations);
            this.setState({
                reservations
            })
        }));
    }

    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    render() {
        const { reservations, isAddReservationVisible } = this.state;

        if ( reservations && reservations.length ) {
            const reservationColumns = [
                {
                    title: 'Restaurant',
                    dataIndex: 'storeName',
                    key: 'storeName'
                },
                {
                    title: 'Start Time',
                    dataIndex: 'startTime',
                    key: 'startTime'
                },
                {
                    title: 'End Time',
                    dataIndex: 'endTime',
                    key: 'endTime'
                },
            ]
            const restaurantColumns = [
                {
                    title: 'Restaurant',
                    dataIndex: 'storeName',
                    key: 'storeName'
                },
                {
                    title: 'Start Time',
                    dataIndex: 'startTime',
                    key: 'startTime'
                },
                {
                    title: 'End Time',
                    dataIndex: 'endTime',
                    key: 'endTime'
                },
            ]
        }

        return (
            <>
            <Divider orientation="left">Your Reservations</Divider>
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={reservations.map((obj) => { return obj['firstName']; })}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
            />
            <Modal
            titile = 'Make new reservation'
            visible = {isAddReservationVisible}
            onOk = {this.closeNewReservation}
            okText = "That's it!"
            onCancel = {this.closeNewReservation}
            width = {1000}>
          
          <>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </>
            </Modal>
            <Container>
            <Button
            onClick={this.openNewReservation}
            type = 'primary'>
                Make new Reservation
            </Button>
            </Container>
        </>);
    }
}

export default Customer;