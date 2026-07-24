export default {
  url: process.env.DATABASE_URL || "postgresql://dummy:dummy@localhost:5432/dummy",
  directUrl: process.env.DIRECT_URL || "postgresql://dummy:dummy@localhost:5432/dummy",
};