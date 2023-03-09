const menuBar = () => {
   const menuBarAdd = document.getElementById('menu-bar');
   const createNavMenu = document.createElement('li');
   createNavMenu.innerHTML = `
      <div class="ps-5 pe-3 fs-5 fw-semibold" type="button" data-bs-toggle="offcanvas"
         data-bs-target="#aboutUsOption" aria-controls="aboutUsOption">About Us</div>
   `;
   menuBarAdd.appendChild(createNavMenu);
}
menuBar();

const departmentBar = () => {
   const departmentNavAdd = document.getElementById('department-bar');
   const createDepartmentMenu = document.createElement('li');
   createDepartmentMenu.innerHTML = `
      <div class="active px-3 fs-5 fw-bold" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#departmentOption" aria-controls="departmentOption">Department</div>
   `;
   departmentNavAdd.appendChild(createDepartmentMenu);
}
departmentBar();

function computerTechnology(){
   window.location.href = 'computerTechnology.html';
};
function civilTechnology(){
   window.location.href = 'civilTechnology.html';
};
function electricalTechnology(){
   window.location.href = 'electricalTechnology.html';
};
function macanicalTechnology(){
   window.location.href = 'macanicalTechnology.html';
};
function constructionTechnology(){
   window.location.href = 'constructionTechnology.html';
};
function electronicsTechnology(){
   window.location.href = 'electronicsTechnology.html';
};
function powerTechnology(){
   window.location.href = 'powerTechnology.html';
};
function environmentalTechnology(){
   window.location.href = 'environmentalTechnology.html';
};
function racTechnology(){
   window.location.href = 'racTechnology.html';
};

const coursesBar = () => {
   const coursesNavAdd = document.getElementById('courses-bar');
   const createCoursesMenu = document.createElement('li');
   createCoursesMenu.innerHTML = `
      <div class="px-3 fs-5 fw-semibold" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#courseDetailsOption" aria-controls="courseDetailsOption">Courses</div>
   `;
   coursesNavAdd.appendChild(createCoursesMenu);
}
coursesBar();

const liveBar = () => {
   const liveBarNavAdd = document.getElementById('live-bar');
   const createliveBarMenu = document.createElement('li');
   createliveBarMenu.innerHTML = `
      <div class="px-3 fs-5 fw-semibold" type="button" disabled data-bs-toggle="offcanvas"
      data-bs-target="#liveLinkOption" aria-controls="liveLinkOption">Live Class</div>
   `;
   liveBarNavAdd.appendChild(createliveBarMenu);
}
liveBar();


