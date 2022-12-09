import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://example.com/api/login', {
        email,
        password,
      });
      console.log(response.data); // In ra kết quả trả về từ server
      // Xử lý các logic tiếp theo nếu đăng nhập thành công
    } catch (error) {
      console.log(error.response.data); // In ra thông báo lỗi trả về từ server
      setError(error.response.data.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      {error && <Text style={{color: 'red'}}>{error}</Text>}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
