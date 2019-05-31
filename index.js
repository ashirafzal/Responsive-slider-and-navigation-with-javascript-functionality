function label1(){
    document.getElementById('p1').style.display = 'block';
    document.getElementById('p1').style.background = '#fff';
    document.getElementById('p1').style.color= 'black';
    document.getElementById('label').style.display = 'none';
    document.getElementById('label2').style.display = 'flex'; 
  }

  function wrap(){
    document.getElementById('p1').style.display = 'none';
    document.getElementById('label').style.display = 'flex';
    document.getElementById('label2').style.display = 'none';
  }

  function openSlideMenu(){
    document.getElementById('side-menu').style.width = '100%';
    document.getElementById('main').style.marginLeft = '0px';
  }

  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }