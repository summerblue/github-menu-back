 $(document).ready(function () {

    // For styling
    $('body').attr('id', 'github-menu-back');

    // If user is logged in
    if ($('.header').hasClass('header-logged-in')) 
    {
        var avatar = $('#user-links li').last().find('img');

        // 1. Replace the origin avatar
        avatar.replaceWith('<span class="octicon octicon-octoface avatar" style="margin-top: 3px;"></span>');

        // 2. Insert the old link
        var avatar_link = avatar.attr('src');
        var current_username = avatar.attr('alt').replace('@', '');
        var new_link = '';
        new_link += '<li class="header-nav-item dropdown js-menu-container">';
        new_link += '    <a class="header-nav-link name" href="/'+current_username+'" data-ga-click="Header, go to profile, text:username">';
        new_link += '      <img alt="@'+current_username+'" class="avatar" height="20" src="'+avatar_link+'" width="20">';
        new_link += '      <span class="css-truncate">';
        new_link += '        <span class="css-truncate-target">'+current_username+'</span>';
        new_link += '      </span>';
        new_link += '    </a>';
        new_link += '</li>';
        $('#user-links').prepend(new_link);

        // 3. Add explore entrance
        $('.header-nav.left').prepend('<li class="header-nav-item"><a href="/explore" class="js-selected-navigation-item header-nav-link">Explore</a></li>');
    };
});