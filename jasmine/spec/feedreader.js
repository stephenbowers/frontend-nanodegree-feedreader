/* feedreader.js */

$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            // Checks that the allFeeds array is defined
            expect(allFeeds).toBeDefined();
            // Checks that the allFeeds array is not empty
            expect(allFeeds.length).not.toBe(0);
        });

        describe('Feed URLs', function() {
            // Loops through each feed in the allFeeds array
            for (let i = 0; i < allFeeds.length; i++) {
                it('is defined and not empty', function() {
                    // Checks if the feed has the url key defined
                    expect(allFeeds[i].url).toBeDefined();
                    // Checks if the feed has the url value not empty
                    expect(allFeeds[i].url).not.toBe('');
                });
            };
        });

        describe('Feed Names', function() {
            // Loops through each feed in the allFeeds array
            for (let i = 0; i < allFeeds.length; i++) {
                it('is defined and not empty', function() {
                    // checks if the feed has the name key defined
                    expect(allFeeds[i].name).toBeDefined();
                    // checks if the feed has the name value not empty
                    expect(allFeeds[i].name).not.toBe('');
                });
            };
        });  
    });

    describe('The menu', function() {
        let menu = document.body;
        
        it('is hidden by default', function() {
            // Check that the menu has the .menu-hidden class by default
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        });
    
         it('changes visibility when menu icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click(); // Click menu icon
            // Check that the menu is visible when clicked
            expect(menu.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click(); // Click menu icon
            // Check that the menu is not visible when clicked a second time
            expect(menu.classList.contains('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {
        let feed;
        let entries;

        // Call the loadFeed function to run before test starts
        beforeEach(function(done) {
            loadFeed(0, function() {
                // Select all the .entry items in the .feed array
                feed = document.querySelector('.feed');
                entries = feed.querySelectorAll('.entry');
                done();
            });
        });
        
        it('has at least a single .entry element within the .feed container', function(done) {
            // Check that the .feed array has at least 1 .entry item
            expect(entries.length).toBeGreaterThan(0);
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
