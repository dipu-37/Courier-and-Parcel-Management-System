import jwt from 'jsonwebtoken';
import { User } from '../../models/User/User.model.js';

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// POST /register
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, role });
    const token = generateToken(user);

    res.status(201).json({ user: { id: user._id, name, email, role }, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ user: { id: user._id, name: user.name, email, role: user.role }, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
