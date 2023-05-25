<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">View Contact</p>
        <p class="fst-italic">Currently viewing {{ contact.name }}'s profile.</p>
      </div>
    </div>
  </div>
  
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img-big">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
          <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
          <li class="list-group-item">Mobile: <span class="fw-bold">{{ contact.mobile }}</span></li>
          <li class="list-group-item">Company: <span class="fw-bold">{{ contact.company }}</span></li>
          <li class="list-group-item">Title: <span class="fw-bold">{{ contact.title }}</span></li>
          <li class="list-group-item">Group: <span class="fw-bold"> {{ group.name }}</span></li>
        </ul>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-primary"><i class="fa fa-arrow-circle-left"></i> Back</router-link>
      </div>
    </div>
    
  </div>

  
</template>

<script>
  import { ContactService } from '../services/ContactService';

  export default {
    name: 'ViewContact',
    data: function(){
      return {
        contact: {
            name: "",
            photo: "",
            mobile: "",
            email: "",
            company: "",
            title: "",
            groupId: "",
            
          },
        group: {}
      }
    },
    created: async function (){
        try {
          let resp = await ContactService.getContact(this.$route.params.contactId);
          
          
          this.contact = resp.data;
          
          let groupRest = await ContactService.getGroup(this.contact);
          this.group = groupRest.data;
          
        } catch (error){
          console.log(error);
        }
      },
      methods : {
        getGroups : async function() {
          try {
            let resp = await ContactService.getAllGroups();
            this.group = resp.data;

          } catch (error) {
            console.log(error);
          }
        }
      }
    
    
  
  }
</script>


<style>

</style>
