//Array variable to hold home project information
var data = [
  {
    id: 1,
    title: 'Family Room',
    image: 'IMG_3977.jpeg',
    body: 'In the family room, we used old wndow sashes, picture frames, and a sign to create a collage. On the adjacent wall, we combined a new metal flower with an old wood assembly to create the wall hanging seen here.',
  },
  {
    id: 2,
    title: 'Dining Room',
    image: 'IMG_1336.jpg',
    body: 'In the dining room, we sanded down all of the woodwork, primed it, and then painted it a crisp gloss white. The old wood had the original finish from 1958 and was in desperate need of a facelift. The white trim now brightens up the whole room.',
  },
  {
    id: 3,
    title: 'Living Room',
    image: 'IMG_3974.jpeg',
    body: 'In the living room, we hung a reclaimed window sash to act as a room divider. The room is long and narrow and needed to be broken up a bit. The window adds seperation while not closing off the space.',
  },
  {
    id: 4,
    title: 'Laundry Room',
    image: 'IMG_8575.jpg',
    body: 'The laundry room was spruced up with the addition of walls, ceiling, and flooring. This was once just a washer and dryer in the unfinished basement. A reclaimed table was covered in chalk paint and is now being used as a folding table. We also hung half of a wooden stepladder on the ceiling. This is being used as a drying rack.',
  },
  {
    id: 5,
    title: 'Piano',
    image: 'IMG-2102.jpg',
    body: 'The piano was recently painted with a couple of coats of black milk paint. The original finish was outdated and crying for help. ',
  },
  {
    id: 6,
    title: 'Pantry Door',
    image: 'PantryDoor.jpg',
    body: 'The pantry door was found at a resale shop. The top panel was removed. The door was sanded and painted black with milk paint. A piece of frosted glass was installed in the opening.',
  },
  {
    id: 7,
    title: 'Powder Room Door',
    image: 'IMG_3344.JPEG',
    body: 'For the powder room, we found an old mahogony door at a reclamation store. We removed all of the old hardware and filled in where the cartridge style lock set was. Next, the top panel was removed from the door. The door was sanded and painted using black milk paint. Once the paint was dry, a piece of frosted glass was installed.',
  },
]

//Other variables
var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

//Functions
function initPosts() {
  for (var i = 0; i<data.length; i++) {
    //Create elements
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section>'),
      $title = $('<h2 class="title"></h2>'),
      $pic = $('<img>'),
      $body = $('<p class="descr"></p>')
      ;($navItem = $('<li></li>'))

      //Add post data
      $title.text(data[i].title)
      $pic.attr('src', 'images/' + data[i].image)
      $body.text(data[i].body)

      //Add navigation data
      $navItem.attr('id', data[i].id)
      $navItem.text(data[i].title)

      //Combine post text elements
      $post.attr('id', postId)
      $post.append($title)
      $post.append($pic)
      $post.append($body)

      //Publish elements to the page
      $posts.append($post)
      $nav.append($navItem)

      //Wire up navigation click event
      $navItem.on('click', function() {
        var id = $(this).attr('id')
        $posts.children().hide()
        $posts.find('#post-' + id).fadeIn()
      })

      //Hide all quotations and show the intro
      $posts.children('.post').hide()
      $intro.fadeIn(500)

    }
}

//Utility Functions
function get(element) {
  return document.getElementById(element);
}
//Application Functions
function openModal(){
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal(){
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  //Clear text
  title.value = '';
  text.value = '';

  //Hide Modal
  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
}

function saveContent(){
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var content = get('post-container');

  //Create content elements
  var newTitle = document.createElement('h2');
  var newTitleText = document.createTextNode(title.value);
  var newContent = document.createElement('p');
  var newContentText = document.createTextNode(text.value);

  //Add elements
  newTitle.appendChild(newTitleText);
  newContent.appendChild(newContentText);
  content.appendChild(newTitle);
  content.appendChild(newContent);

  closeModal();
}

//Wire up the event handlers
window.addEventListener('load', function() {
  var newButton = get('new-button');
  var cancelButton = get('cancel-button');
  var saveButton = get('save-button');

  newButton.addEventListener('click', openModal, false);
  cancelButton.addEventListener('click', closeModal, false);
  saveButton.addEventListener('click', saveContent, false);
});

//Call the function and make it all happen
initPosts()

//Bring back the home page when body is clicked
$posts.on('click', function() {
  $posts.children('.post').hide()
  $intro.fadeIn(500)
})
