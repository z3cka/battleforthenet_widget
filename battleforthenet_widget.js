var _bftn_options = {
    /*
     * Choose from 'money', 'stop', and 'slow'. Omit this property to get the 
     * default theme.
     */
    theme: 'slow', // @type {string}
    
    /*
     * Or, if you want your own custom theme, specify its properties here.
     * Unspecified options will fall back to the default values.
     */
    theme: {
//      className: 'money', // @type {string} will be applied to iframe body tag
//      logos: ['images/money.png', 'images/stop.png'], // @type {Array} img src values
//      headline: 'Your headline here.', // @type {string} modal headline text
      body: 'An open Internet and net neutrality are critical to higher education and the our mission to support teaching and research. The UCLA Library recognizes the importance of a free and open internet and are taking advantage of this Day of Action to Save Net Neutrality to educate our community about this important issue. You can take action by contacting the FCC and Congress see https://www.battleforthenet.com/ for more information. We’d like to make the UCLA Community aware of the issue and hopefully become more informed about the importance of unfettered access to information. For more information of these important policy issues see this link: http://policynotes.arl.org/?p=1569' // @type {string} modal body text
    },
    
    /*
     * Choose from 'fp' for Free Press, 'dp' for Demand Progress or
     * 'fftf' for Fight for the Future. Omit this property to randomly split
     * form submissions between all organizations in the Battle for the Net 
     * coalition.
     */
    org: 'fftf', // @type {string}
    
    /*
     * Specify a delay (in milliseconds) before showing the widget. Defaults to one 
     * second.
     */
    delay: 1000, // @type {number}
    
    /*
     * Specify a date on which to display the widget. Defaults to July 12th, 2017 if 
     * omitted. ISO-8601 dates are UTC time, three-argument dates (with a zero-based
     * month) are local time.
     */
    date: new Date(2017, 6, 12), // @type {Date}
    
    /*
     * If you show the modal on your homepage, you should let users close it to
     * access your site. However, if you launch a new tab to open the modal, closing
     * the modal just leaves the user staring at a blank page. Set this to true to
     * prevent closing the modal - the user can close the tab to dismiss it. Defaults
     * to false.
     */
    uncloseable: false, // @type {Boolean}

    /*
     * Prevents the widget iframe from loading Google Analytics. Defaults to false.
     */
    disableGoogleAnalytics: false, // @type {Boolean}
    
    /*
     * Always show the widget. Useful for testing.
     */
    always_show_widget: true // @type {Boolean}
  };
