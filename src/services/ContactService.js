import axios from "axios";


export class ContactService {
    // static serverURL = `http://localhost:9000`;
    static serverURL = `https://far-able-blob.glitch.me`; // glitch.com running the json-server we created

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts/`;
        return axios.post(dataURL, contact);
    }

    static updateContact(contact, contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL);
    }

    static getAllGroups(){
        let dataURL = `${this.serverURL}/groups/`;
        return axios.get(dataURL);

    }

    static getGroup(contact){
        let groupId = contact.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;

        return axios.get(dataURL);
    }

    static getSearch(keyword){
        let dataURL = `${this.serverURL}/contacts?q=${keyword}`

        return axios.get(dataURL);
    }

}