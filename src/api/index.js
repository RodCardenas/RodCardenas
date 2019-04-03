const { ApolloServer, gql } = require('apollo-server');

let employees = [
  { id: 1, age: 18, name: "Rodrigo Cardenas", enterpriseId: 1 },
  { id: 2, age: 20, name: "Mike", enterpriseId: 2 },
  { id: 3, age: 30, name: "Kyle", enterpriseId: 1 },
];

let enterprises = [
  { id: 1, name: "Google" },
  { id: 2, name: "Microsoft" },
];

let fruits = [
  { id: 1, color: "Banana", taste: 7, employeeId: 1 },
  { id: 2, color: "Mango", taste: 10, employeeId: 1 },
];

// The GraphQL schema
const typeDefs = gql`
  type Query {
    employees: [Employee]
    enterprises: [Enterprise]
    fruits: [Fruit]

    employee(name: String): Employee
    enterprise(name: String): Enterprise
  }

  type Employee {
    id: ID
    age: Int
    name: String
    enterpriseId: ID
    fruits: [Fruit]
  }

  type Enterprise {
    id: ID
    name: String
    employees: [Employee]
  }

  type Fruit {
    id: ID
    color: String
    taste: Int
    employeeId: ID
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    employees: () => employees,
    enterprises: () => enterprises,
    employee: (parent, { name }) => {
      return employees.find(employee => {
        if (employee.name === name) {
          return employee;
        }
      });
    },
    enterprise: (parent, { name }) => {
      return enterprises.find(enterprise => {
        if (enterprise.name === name) {
          return enterprise;
        }
      });
    },
    fruits: () => fruits,
  },
  Enterprise: {
    employees: (parent) => {
      const enterpriseEmployees = [];

      employees.forEach(employee => {
        if (employee.enterpriseId === parent.id) {
          enterpriseEmployees.push(employee);
        }
      });

      return enterpriseEmployees;
    }
  },
  Employee: {
    fruits: (parent) => {
      const employeesFruits = [];

      fruits.forEach(fruit => {
        if (fruit.employeeId === parent.id) {
          employeesFruits.push(fruit);
        }
      });

      return employeesFruits;
    }
  },

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
