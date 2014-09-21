Le Connaisseur
==============

![Le Connaisseur](conaisseur.png)

EPG Recommendations based on viewer behavior using Watchmi API.

## Idea

- Hijack HbbTV portals of the broadcasters by using a name server which directs all requests to our portal.
- Generate recommendations over all TV channels based on user ratings and on user behaviour.
- Easily switch to the next programme which is really interesting.
- Broadcasters could participate by including our library on the red button.
- A statistics module ensures that all participating parties have equal benefit.

## DNS

Starting name server to hijack broadcasting portals

    sudo /usr/local/sbin/named -c named.conf -d 1
    
Relolad named configuration

    sudo /usr/local/sbin/rndc -k rndc.key -p 54 reload
