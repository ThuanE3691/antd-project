import Header from "../../../shared/Header/Header";
import "./LoginPage.css";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
   console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
};
const LoginPage = () => (
   <div className="container">
      <Header></Header>
      <h1>Login</h1>
      <Form
         name="basic"
         labelCol={{
            span: 4,
         }}
         wrapperCol={{
            span: 20,
         }}
         style={{
            width: 500,
         }}
         initialValues={{
            remember: true,
         }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
      >
         <Form.Item
            label="Username"
            name="username"
            rules={[
               {
                  required: true,
                  message: "Please input your username!",
               },
            ]}
         >
            <Input />
         </Form.Item>

         <Form.Item
            label="Password"
            name="password"
            rules={[
               {
                  required: true,
                  message: "Please input your password!",
               },
            ]}
         >
            <Input.Password />
         </Form.Item>

         <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
               offset: 4,
               span: 6,
            }}
         >
            <Checkbox>Remember me</Checkbox>
         </Form.Item>

         <Form.Item
            wrapperCol={{
               offset: 10,
               span: 4,
            }}
         >
            <Button type="primary" htmlType="submit" className="submit-btn">
               Submit
            </Button>
         </Form.Item>
      </Form>
   </div>
);
export default LoginPage;
