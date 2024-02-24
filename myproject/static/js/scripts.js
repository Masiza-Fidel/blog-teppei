document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('scrollButton');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.navbar-brand img');
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scroll down
            navbar.classList.add('hide-navbar');
            logo.classList.add('black-logo');
            button.style.display = "block";
        } else {
            // Scroll up
            navbar.classList.remove('hide-navbar');
            logo.classList.remove('black-logo');
            if (currentScroll <= 3) { // Adjust this threshold as needed
                button.style.display = "none";
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);

    // Hide all columns except the first three on page load
    var allColumns = document.querySelectorAll('.service_list_col');
    for (var i = 6; i < allColumns.length; i++) {
        allColumns[i].style.display = 'none';
    }

    // Hide all columns except the first three on page load
    var allColumns = document.querySelectorAll('.resource_col');
    for (var i = 6; i < allColumns.length; i++) {
        allColumns[i].style.display = 'none';
    }

    // Get all FAQ toggle checkboxes and their corresponding text elements
    const faqToggles = document.querySelectorAll('.faq-toggle');
    const faqTexts = document.querySelectorAll('.faq-text');

    // Hide all FAQ texts initially
    faqTexts.forEach(function (text) {
        text.style.display = "none";
    });

    faqToggles.forEach(function (toggle) {
        toggle.addEventListener('change', function () {
            // Get the corresponding FAQ text for the clicked toggle
            const faqText = this.nextElementSibling.querySelector('.faq-text');

            if (this.checked) {
                // Show the clicked FAQ text
                faqText.style.display = "block";

                // Hide all other FAQ texts
                faqTexts.forEach(function (text) {
                    if (text !== faqText) {
                        text.style.display = "none";
                    }
                });
            } else {
                // Hide the clicked FAQ text
                faqText.style.display = "none";
            }
        });
    });

    // Get all notice_list toggle checkboxes and their corresponding text elements
    const notice_listToggles = document.querySelectorAll('.notice_list-toggle');
    const notice_listTexts = document.querySelectorAll('.notice_list-text');

    // Hide all notice_list texts initially
    notice_listTexts.forEach(function (text) {
        text.style.display = "none";
    });

    notice_listToggles.forEach(function (toggle) {
        toggle.addEventListener('change', function () {
            // Get the corresponding notice_list text for the clicked toggle
            const notice_listText = this.nextElementSibling.querySelector('.notice_list-text');

            if (this.checked) {
                // Show the clicked notice_list text
                notice_listText.style.display = "block";

                // Hide all other notice_list texts
                notice_listTexts.forEach(function (text) {
                    if (text !== notice_listText) {
                        text.style.display = "none";
                    }
                });
            } else {
                // Hide the clicked notice_list text
                notice_listText.style.display = "none";
            }
        });
    });

    // Get all related_services toggle checkboxes and their corresponding text elements
    const related_servicesToggles = document.querySelectorAll('.related_services-toggle');
    const related_servicesTexts = document.querySelectorAll('.related_services-text');

    // Hide all related_services texts initially
    related_servicesTexts.forEach(function (text) {
        text.style.display = "none";
    });

    related_servicesToggles.forEach(function (toggle) {
        toggle.addEventListener('change', function () {
            // Get the corresponding related_services text for the clicked toggle
            const related_servicesText = this.nextElementSibling.querySelector('.related_services-text');

            if (this.checked) {
                // Show the clicked related_services text
                related_servicesText.style.display = "block";

                // Hide all other related_services texts
                related_servicesTexts.forEach(function (text) {
                    if (text !== related_servicesText) {
                        text.style.display = "none";
                    }
                });
            } else {
                // Hide the clicked related_services text
                related_servicesText.style.display = "none";
            }
        });
    });

    const oneTimePrices = {
        'starter plan': 'Free',
        'lite plan': '$100',
        'professional plan': '$150',
        'enterprise plan': '$200'
    };
    const monthlyPrices = {
        'starter plan': 'Free',
        'lite plan': '$20/month',
        'professional plan': '$30/month',
        'enterprise plan': '$40/month'
    };

    // Function to update prices based on subscription selection
    function updatePrices() {
        const selectedSubscription = document.querySelector('input[name="subscription"]:checked').value;
        const prices = selectedSubscription === 'one-time' ? oneTimePrices : monthlyPrices;
        
        // Update price fields
        Object.keys(prices).forEach(plan => {
            const priceField = document.querySelector(`#${plan.replace(/\s+/g, '-')}-price`);
            if (priceField) {
                priceField.textContent = prices[plan];
            }
        });
    }

    // Event listener for subscription option change
    document.querySelectorAll('input[name="subscription"]').forEach(function (elem) {
        elem.addEventListener('change', updatePrices);
    });

    // Initial update
    updatePrices();
});

function showMoreResourceColumns() {
    // Get all columns
    var allColumns = document.querySelectorAll('.resource_col');
    
    // Toggle the visibility of the last three columns
    for (var i = 6; i < allColumns.length; i++) {
        allColumns[i].style.display = (allColumns[i].style.display === 'none' || allColumns[i].style.display === '') ? 'block' : 'none';
    }

    // Change the "See More" button text based on the current state
    var seeMoreBtn = document.getElementById('seeMoreBtnForResource');
    var areColumnsVisible = allColumns[3].style.display !== 'none';
    seeMoreBtn.textContent = areColumnsVisible ? 'もっと見る' : 'もっとみる';
}

function showMoreServiceListColumns() {
    // Get all columns
    var allColumns = document.querySelectorAll('.service_list_col');
    
    // Toggle the visibility of the last three columns
    for (var i = 6; i < allColumns.length; i++) {
        allColumns[i].style.display = (allColumns[i].style.display === 'none' || allColumns[i].style.display === '') ? 'block' : 'none';
    }

    // Change the "See More" button text based on the current state
    var seeMoreBtn = document.getElementById('seeMoreBtnForServiceList');
    var areColumnsVisible = allColumns[3].style.display !== 'none';
    seeMoreBtn.textContent = areColumnsVisible ? 'もっと見る' : 'もっとみる';
}








 //document.addEventListener("DOMContentLoaded", function() {
   // const elements = document.querySelectorAll('.scroll-reveal');
  
   // function revealOnScroll() {
    //  elements.forEach(element => {
      //  const elementTop = element.getBoundingClientRect().top;
       // const windowHeight = window.innerHeight;
        
       // if (elementTop < windowHeight * 0.8) {
       //   element.classList.add('show');
     //   }
    //  });
   /// }
  
   // window.addEventListener('scroll', revealOnScroll);
 //   revealOnScroll(); // Trigger reveal on initial load
 // });
  

 document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.scroll-reveal');
  
    function revealOnScroll() {
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', debounce(revealOnScroll, 86)); // Adjust the debounce time as needed
    revealOnScroll(); // Trigger reveal on initial load
  });
  
  // Debounce function to limit the number of times revealOnScroll() is called during scrolling
  function debounce(func, delay) {
    let timeoutId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  }
  


    
    
  