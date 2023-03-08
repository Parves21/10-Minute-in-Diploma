console.log('it has added.');
console.log('Everything is okey !');

const menuBar = () => {
   const menuBarAdd = document.getElementById('menu-bar');
   const createNavMenu = document.createElement('li');
   createNavMenu.innerHTML = `
      <div class="active ps-5 pe-3 pt-2 fs-5 fw-bold" type="button" data-bs-toggle="offcanvas"
         data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Menu</div>
   `;
   menuBarAdd.appendChild(createNavMenu);
}
menuBar();


const departmentBar = () => {
   const departmentNavAdd = document.getElementById('department-bar');
   const createDepartmentMenu = document.createElement('li');
   createDepartmentMenu.innerHTML = `
   <a class="nav-link ps-3 pe-3 fs-5" aria-current="page" href="#">Department</a>
   `;
   departmentNavAdd.appendChild(createDepartmentMenu);
}
departmentBar();

const coursesBar = () => {
   const coursesNavAdd = document.getElementById('courses-bar');
   const createCoursesMenu = document.createElement('li');
   createCoursesMenu.innerHTML = `
   <a class="nav-link ps-3 pe-3 fs-5" aria-current="page" href="#">Courses</a>
   `;
   coursesNavAdd.appendChild(createCoursesMenu);
}
coursesBar();

const liveBar = () => {
   const liveBarNavAdd = document.getElementById('live-bar');
   const createliveBarMenu = document.createElement('li');
   createliveBarMenu.innerHTML = `
   <a class="nav-link ps-3 pe-3 fs-5" aria-current="page" href="#">Live Class</a>
   `;
   liveBarNavAdd.appendChild(createliveBarMenu);
}
liveBar();


