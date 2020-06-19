function AutoResize(MaxWidth) {
  for(var i=0;i<document.images.length;i++) {
    if(document.images[i].width > MaxWidth) {
      document.images[i].width=MaxWidth;
      document.images[i].height-=document.images[i].height*(document.images[i].width-MaxWidth)/document.images[i].width;
    }
  }
}