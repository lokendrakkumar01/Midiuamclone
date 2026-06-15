
const searchInput = document.querySelector('.search-box input');

if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    let value = searchInput.value.toLowerCase();

    let articles = document.querySelectorAll('.article');

    articles.forEach(article => {
      let text = article.innerText.toLowerCase();

      if (text.includes(value)) {
        article.style.display = 'flex';
      } else {
        article.style.display = 'none';
      }
    });
  });
}


const tabs = document.querySelectorAll('.tabs span');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => {
      item.classList.remove('active');
    });

    tab.classList.add('active');
  });
});



const followButtons = document.querySelectorAll('.follow-user button');

followButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === 'Follow') {
      button.innerText = 'Following';

      button.style.background = '#000';
      button.style.color = '#fff';
    } else {
      button.innerText = 'Follow';

      button.style.background = '#fff';
      button.style.color = '#000';
    }
  });
});



const darkBtn = document.createElement('button');

darkBtn.innerText = '🌙';

darkBtn.style.padding = '10px';
darkBtn.style.border = 'none';
darkBtn.style.cursor = 'pointer';
darkBtn.style.background = 'transparent';

document.querySelector('.nav-right').appendChild(darkBtn);

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkBtn.innerText = '☀️';
  } else {
    darkBtn.innerText = '🌙';
  }
});



const menuIcon = document.querySelector('.menu-icon');

const sidebar = document.querySelector('.sidebar');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });
}



const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  article.addEventListener('mouseenter', () => {
    article.style.transform = 'translateY(-3px)';
    article.style.transition = '0.3s';
  });

  article.addEventListener('mouseleave', () => {
    article.style.transform = 'translateY(0px)';
  });
});



const topics = document.querySelectorAll('.topics button');

topics.forEach(topic => {
  topic.addEventListener('click', () => {
    alert('Topic Selected: ' + topic.innerText);
  });
});



const bell = document.querySelector('.fa-bell');

if (bell) {
  bell.addEventListener('click', () => {
    alert('No New Notifications');
  });
}



const profile = document.querySelector('.profile');

if (profile) {
  profile.addEventListener('click', () => {
    alert('Profile Page Coming Soon');
  });
}


window.addEventListener('load', () => {
  console.log('Medium Clone Loaded Successfully');
});
