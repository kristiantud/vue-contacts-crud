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
            <input type="text" class="form-control  my-2" placeholder="Name">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control  my-2" placeholder="Photo URL">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control  my-2" placeholder="Email">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control  my-2" placeholder="Mobile">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control  my-2" placeholder="Company">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control  my-2" placeholder="Title">
          </div>
          <div class="mb-2">
            <select name="" id="" class="form-control">
              <option value="">Select Group</option>
            </select>
          </div> 
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Update">
          </div> 
          
        </form>
      </div>

      <div class="col-md-4">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
      </div>
    </div>
    

  </div>
  
</template>

<script>
  export default {
    name: 'EditContact'
  }
</script>


<style>

</style>
