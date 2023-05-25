<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">Edit Contact</p>
        <p class="fst-italic">Currently editing {{ contact.name }}'s profile.</p>
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

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form action="" @submit.prevent="updateContact()">
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
              <option :value="group.id" v-for="group of groups"  :key="group.id">{{group.name}}</option>
            </select>
          </div> 
          <div class="mb-2">
            <input type="submit" class="btn btn-primary" value="Update" >
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
  import { ContactService } from '../services/ContactService';
  export default {
    name: 'EditContact',
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
        groups: {},
        loading: false
      }
    },
    created: async function (){
        try {
          this.loading = true;
          let resp = await ContactService.getContact(this.$route.params.contactId);
          this.contact = resp.data;
          
          let groupRest = await ContactService.getAllGroups();
          this.groups = groupRest.data;
          this.loading = false;
          
        } catch (error){
          console.log(error);
        }
      },
      methods :{
        updateContact : async function (){
          let resp = await ContactService.updateContact(this.contact, this.contact.id);
          this.$router.push('/');
          
          
        }
      }
  }
</script>


<style>

</style>
