// document.addEventListener("DOMContentLoaded", function() {
//     let links = document.querySelectorAll(".sidebar .nav li a");
//     for (let link of links) {
//       link.addEventListener("click", function(event) {
//         // Remove the active class from all links
//         document.querySelectorAll(".sidebar .nav li").forEach(li => li.classList.remove("active"));
//         // Add the active class to the clicked link
//         event.currentTarget.parentNode.classList.add("active");
//         // Prevent default behavior (e.g., page navigation)
//         event.preventDefault(); 
//       });
//     }
//   });