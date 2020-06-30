$(() => {
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
  $('#selected-plays li.horizontal').addClass('big-letter');

  $('a[href^="mailto:"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  $('tr:nth-child(odd)').addClass('alt');
  $('td:contains(Henry)').next().addClass('highlight');

  $('a').filter((i, a) =>
    a.hostname && a.hostname !== location.hostname
  ).addClass('external');

  //$('ul > li > ul > li').addClass('special'); //equivalent to expression below
  $('li.horizontal').find('li').addClass('special');
  $('td:nth-child(3)').addClass('year');
  $('tr').children(':contains(Tragedy)').first().addClass('special');
  $('li').has('a').nextAll().addClass('afterlink');
  $('a[href$=".pdf"').closest('ul').addClass('tragedy')
});