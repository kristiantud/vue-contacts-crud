<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Contact</p>
        <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab reprehenderit libero earum sit enim optio officiis, praesentium mollitia minima accusamus, architecto minus error exercitationem ullam facere dolorum inventore accusantium dolor?</p>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form action="">
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
            <input type="submit" class="btn btn-success" value="Update" @click="updateContact()">
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
        groups: {}
      }
    },
    created: async function (){
        try {
          console.log(this.$route.params.contactId);
          let resp = await ContactService.getContact(this.$route.params.contactId);
          this.contact = resp.data;
          
          let groupRest = await ContactService.getAllGroups();
          this.groups = groupRest.data;
          
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
