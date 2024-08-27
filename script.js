function tweetMessage() {
    const message = "MIRAI TO WA JEW\n#MiraitowaTH #JewBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
