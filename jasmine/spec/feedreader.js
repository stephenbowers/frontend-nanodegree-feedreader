/* feedreader.js */

$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            // Checks that the allFeeds array is defined
            expect(allFeeds).toBeDefined();
            // Checks that the allFeeds array is not empty
            expect(allFeeds.length).not.toBe(0);
        });

        for (let i = 0; i < allFeeds.length; i++) {
            // Loops through each feed in the allFeeds array
            describe('Feed #' + (i + 1) + ' URL', function() {
                it('is defined', function() {
                    // checks if the feed has the url key defined
                    expect(allFeeds[i].url).toBeDefined();
                });
                it('is not empty', function() {
                    // checks if the feed has the url value not empty
                    expect(allFeeds[i].url).not.toBe('');
                });
            });

        };

        for (let i = 0; i < allFeeds.length; i++) {
            // Loops through each feed in the allFeeds array
            describe('Feed #' + (i + 1) + ' Name', function() {
                it('is defined', function() {
                    // checks if the feed has the name key defined
                    expect(allFeeds[i].name).toBeDefined();
                });
                it('is not empty', function() {
                    // checks if the feed has the name value not empty
                    expect(allFeeds[i].name).not.toBe('');
                });
            });
        };
    });

    describe('The menu', function() {
        let menu = document.body;
        
        it('is hidden by default', function() {
            // Check that the menu is hidden by default
            expect(menu.className).toBe('menu-hidden');
        });
    
         it('changes visibility when menu icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click(); // Click menu icon
            // Check that the menu is visible when clicked
            expect(menu.className).not.toBe('menu-hidden');
            menuIcon.click(); // Click menu icon
            // Check that the menu is not visible when clicked a second time
            expect(menu.className).toBe('menu-hidden');
         });
    });

    describe('Initial Entries', function() {
        let feed = document.getElementsByClassName('feed')[0];

        // Call the loadFeed function to run before test starts
        beforeEach(function(done) {
            loadFeed(0, done);
            done();
        });
        
        it('has at least a single .entry element within the .feed container', function(done) {
            // Check that the .feed container array has at least 1 item
            expect(feed.length).not.toBe(0);
            done();
        });
    });
    
    describe('New Feed Selection', function() {
        let oldFeed;
        let newFeed;

        // Call the loadFeed function to run before test starts
        beforeEach(function(done) {
            // Call the loadFeed function to get initial page data
            loadFeed(0, function() {
                // set current feed data into oldFeed variable
                oldFeed = document.getElementsByClassName('feed')[0].innerHTML;
                // Call the loadFeed function to get different page data
                loadFeed(1, function() {
                    // set current new feed data into newFeed variable
                    newFeed = document.getElementsByClassName('feed')[0].innerHTML;
                    done();
                });
            });
        });

        it('is loaded and content changes', function () {
            // Check that oldFeed and newFeed variable are different
            expect(oldFeed).not.toMatch(newFeed);
        });
    });
}());
