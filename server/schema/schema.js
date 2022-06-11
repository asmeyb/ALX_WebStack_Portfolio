const { projects, clients } = require('../sampleData.js')

// Mongoose models
const Project = require('../models/Projects');
const Client = require('../models/Clients');

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema,GraphQLList } = require('graphql');



const ProjectType = new GraphQLObjectType({
    name:'project',
    fields:() => ({
        id: { type: GraphQLID },
        name: { type : GraphQLString },
        description : { type:GraphQLString },
        staus : { type:GraphQLString },
        client:{
            type:ClientType,
            resolve(parent,args){
                return Client.findById(parent.clientId)
            }
        }
    })
})

//Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields:() => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {

        projects:{
            type: new GraphQLList(ProjectType),
            resolve(parent,args){
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                return Project.findById(args.id);
            }
        },

        clients:{
            type: new GraphQLList(ClientType),
            resolve(parent,args){
                return Client.Find();
            }
        },
        client: {
            type: ClientType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                return Client.findById(args.id)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})