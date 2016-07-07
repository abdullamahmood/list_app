(function(exports){

    toHTML: function() {
      var arrayLength = this._list.length;
      var returnArray = ['<ul>','\n'];
      for (var i = 0; i < arrayLength; i++) {
        returnArray.push(('<li>'+ this._list[i].name() + '</li>' + '\n'));
        }
        returnArray.push('</ul>');
      return returnArray.join("");
    }

})(this);
