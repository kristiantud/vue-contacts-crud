<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-primary fw-bold">Add Contact</p>
          <p class="fst-italic">Add a contact by filling out the following fields:</p>
        </div>
      </div>
    </div>

    <!-- <pre>{{ contact }}</pre> -->
    <!-- <pre>{{ groups }}</pre> -->
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="submitCreate()">
            <div class="mb-2">
              <input v-model="contact.name" type="text" class="form-control  my-2" placeholder="Name">
            </div>
            <div class="mb-2">
              <input v-model="contact.photo" type="text" class="form-control  my-2" placeholder="Photo URL">
            </div>
            <div class="mb-2">
              <input v-model="contact.email" type="text" class="form-control  my-2" placeholder="Email">
            </div>
            <div class="mb-2">
              <input v-model="contact.mobile" type="text" class="form-control  my-2" placeholder="Mobile">
            </div>
            <div class="mb-2">
              <input v-model="contact.company" type="text" class="form-control  my-2" placeholder="Company">
            </div>
            <div class="mb-2">
              <input v-model="contact.title" type="text" class="form-control  my-2" placeholder="Title">
            </div>
            <div class="mb-2">
              <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                <option value="">Select Group</option>
                <option  :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
              </select>
            </div> 
            <div class="mb-2">
              <input type="submit" class="btn btn-primary" value="Create">
            </div> 
            
          </form>
        </div>

        <div class="col-md-4">
          <img :src="contact.photo" alt="" class="contact-img">
        </div>
      </div>
      

    </div>
  </template>
  
  <script>
import { ContactService } from '../services/ContactService'
    export default {
      name: 'AddContact',
      data: function(){
        return {
          contact: {
            name: "",
            photo: "",
            mobile: "",
            email: "",
            company: "",
            title: "",
            groupId: ""
          },
           groups : []
        }
      }, 
      created : async function (){
        try { 
          let response = await ContactService.getAllGroups();
          this.groups = response.data;
        } catch (error){
          console.log(error);
        }
      },
      methods : {
        submitCreate : async function (){ 
          try {
            let resp = await ContactService.createContact(this.contact);
            if (resp) {
              return this.$router.push('/'); // redirect to main page on successful creation
            } else {
              return this.$router.push('/contacts/add');
            }
          } catch (error){
            console.log(error);
          }
        }
      }
    }
    
  </script>
  
  
  <style>
  
  </style>
  