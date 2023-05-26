<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-primary fw-bold">Contact Manager
            <router-link to="/contacts/add" class="btn btn-primary btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
          </p>
          <p class="fst-italic">Currently displaying all contacts in the database. Create a new contact entry by clicking on the 'New' button. View, Edit, or Delete a contact entry by clicking one of the buttons at the right hand side of any contact card.</p>
        
        <form @submit.prevent="searchContact(nameToSearch)">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
              <input v-model="nameToSearch" type="text" class="form-control" placeholder="Search Name">
            </div>
            <div class="col">
                <input type="submit" class="btn btn-outline-dark" >
            </div>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>


    <!-- spinner -->
    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <!-- <p>loading</p> -->
            <Spinner/>
            <!-- <NavBar/> -->

          </div>
        </div>
      </div>
    </div>

    <!-- error message -->
    <div v-if="!loading && errorMessage">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="h3 text-danger fw-bold"> {{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-if="!searchFound">
      <div class="row">
        <div class="col">
          <h4 class="mt-4 text-danger">User does not exist in the database.</h4>
          <div class="row mt-3">
            <div class="col">
              <button @click="backToHome()" class="btn btn-primary"><i class="fa fa-arrow-circle-left"></i> Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-3" v-if="contacts.length > 0">
      <div class="row">
        <div class="col-md-6" v-for="contact of contacts" :key="contact">
          <div class="card my-2 list-group-item-primary shadow-lg" >
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img :src="contact.photo" alt="" class="contact-img">
                </div>
                <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
                    <li class="list-group-item">Mobile: <span class="fw-bold">{{ contact.mobile }}</span></li>
                  </ul>
                </div>
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                  <router-link :to="`/contacts/view/${ contact.id }`" class="btn btn-warning my-1 card-btn" >
                    <i class="fa fa-eye"><span class="view-span">View</span></i>
                  </router-link>
                  <router-link :to="`/contacts/edit/${ contact.id }`" class="btn btn-primary my-1 card-btn">
                    <i class="fa fa-pen"><span class="edit-span" >Edit</span></i>
                  </router-link>
                  <button class="btn btn-danger my-1 card-btn" @click="deleteContact(contact.id)">
                    <i class="fa fa-trash"><span class="delete-span">Delete</span></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
    import { ContactService } from '../services/ContactService';
    

    export default {
      name: 'ContactManager',
      data: function(){
        return{
          loading: false,
          contacts: [],
          errorMessage: null,
          searchFound: true,
          nameToSearch: ""
        }
      },
      created: async function(){
        try {
          this.loading = true;
          let resp = await ContactService.getAllContacts();
          this.contacts = resp.data;
          this.loading = false;
        }catch (error){
          this.errorMessage = error;
          this.loading = false;
        }
      },
      methods: {
        deleteContact: async function(contactId){
          try {
            this.loading = true;
            let resp = await ContactService.deleteContact(contactId);
            if (resp){
              let resp = await ContactService.getAllContacts();
              this.contacts = resp.data;
              this.loading = false
            }

          } catch (error){
            console.log(error);
          }
        },
        searchContact: async function(keyword) {
          this.loading = true;
          let resp = await ContactService.getSearch(keyword);
          if (resp.data.length > 0){
            this.contacts = resp.data;
            this.searchFound = true;
            this.loading = false;
            console.log(this.contacts);
          } else {
            this.searchFound = false;
            this.contacts = {};
            this.loading = false;
          }
        },
        backToHome: async function (){
          try {
            this.loading = true;
            let resp = await ContactService.getAllContacts();
            this.contacts = resp.data;
            this.loading = false;
            this.searchFound = true;
          }catch (error){
            this.errorMessage = error;
            this.loading = false;
          }
        }
      }
    }
    
  </script>
  
  
  <style>
  
  </style>
  