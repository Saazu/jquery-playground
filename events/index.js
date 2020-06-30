$(() => {
  $('#switcher')
    .click((e) => {
      $(e.currentTarget)
        .children('button')
        .toggleClass('hidden');
    });
});

$(() => {
  $('#switcher-default')
    .addClass('selected');

  $('#switcher button')
    .click((e) => {
      const bodyClass = e.target.id.split('-')[1]
      $('body')
        .removeClass()
        .addClass(bodyClass);
      $(e.target)
        .addClass('selected')
        .siblings()
        .removeClass('selected');
      e.stopPropagation();

    })


  $('#switcher h3')
    .hover(function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });
});