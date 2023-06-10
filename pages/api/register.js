const registerHandler = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Lakukan validasi email dan password
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }
  
      if (password.length < 8) {
        return res
          .status(400)
          .json({ error: 'Password must be at least 8 characters' });
      }
  
      // Kirim permintaan ke API register
      const response = await fetch('https://story-api.dicoding.dev/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return res.status(200).json({ message: data.message });
      } else {
        return res.status(400).json({ error: data.message });
      }
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred' });
    }
  };
  
  export default registerHandler;
  