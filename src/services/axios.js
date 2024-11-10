import axios from 'axios';

export default axios.create({
  base_url: 'http://localhost:8080',
});
