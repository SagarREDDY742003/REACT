import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../Configuration/Conf";

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // GET POST
    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        } catch (error) {
            console.log("AppWrite service :: getPost() ::", error);
            return false
        }
    }
    
    // GET POST BASED ON QUERIES
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log("AppWrite service :: getPosts ::", error);
            return false
        }
    }

    // CREATE POST
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("AppWrite service :: createPost() ::", error);
            return false
        }
    }

    // UPDATE POST
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug,
                {
                    title, content, featuredImage, status
                }
                
            )
        } catch (error) {
            console.log("AppWrite service :: updatePost() ::", error);
            return false
        }
    }

    // DELETE POST
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug
            )
            return true;
        } catch (error) {
            console.log("AppWrite service :: deletePost() ::", error);
            return false
        }
    }

//STORAGE SERVICE

    // UPLOAD FILE
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("AppWrite service :: uploadFile() ::", error);
            return false
        }
    }

    // DELETE FILE
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (error) {
            console.log("AppWrite service :: deleteFile() ::", error);
            return false
        }
    }

    // GET FILE PREVIEW
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId, 
            fileId
        ).href
    }
}

const service = new Service();

export default service;

