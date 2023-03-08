const menuBar = () => {
   const menuBarAdd = document.getElementById('menu-bar');
   const createNavMenu = document.createElement('li');
   createNavMenu.innerHTML = `
      <div class="active ps-5 pe-3 fs-5 fw-bold" type="button" data-bs-toggle="offcanvas"
         data-bs-target="#aboutUsOption" aria-controls="aboutUsOption">About Us</div>
   `;
   menuBarAdd.appendChild(createNavMenu);
}
menuBar();


const departmentBar = () => {
   const departmentNavAdd = document.getElementById('department-bar');
   const createDepartmentMenu = document.createElement('li');
   createDepartmentMenu.innerHTML = `
      <div class="active px-3 fs-5 fw-semibold" type="button"     data-bs-toggle="offcanvas"
      data-bs-target="#departmentOption" aria-controls="departmentOption">Department</div>
   `;
   departmentNavAdd.appendChild(createDepartmentMenu);
}
departmentBar();

const coursesBar = () => {
   const coursesNavAdd = document.getElementById('courses-bar');
   const createCoursesMenu = document.createElement('li');
   createCoursesMenu.innerHTML = `
      <div class="active px-3 fs-5 fw-semibold" type="button"     data-bs-toggle="offcanvas"
      data-bs-target="#courseDetailsOption" aria-controls="courseDetailsOption">Courses</div>
   `;
   coursesNavAdd.appendChild(createCoursesMenu);
}
coursesBar();

const liveBar = () => {
   const liveBarNavAdd = document.getElementById('live-bar');
   const createliveBarMenu = document.createElement('li');
   createliveBarMenu.innerHTML = `
      <div class="active px-3 fs-5 fw-semibold" type="button"     data-bs-toggle="offcanvas"
      data-bs-target="#liveLinkOption" aria-controls="liveLinkOption">Live Class</div>
   `;
   liveBarNavAdd.appendChild(createliveBarMenu);
}
liveBar();


