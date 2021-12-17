import prisma from '@/lib/prisma';

const UsersApiExample = async (req, res) => {
  // console.log(prisma)
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'error fetching users' });
  }
};

export default UsersApiExample;
