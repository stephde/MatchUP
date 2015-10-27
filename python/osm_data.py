#!/bin/bash

osm_file_path = "../../../../../../Desktop/california-latest.osm.pbf"

import json
from imposm.parser import OSMParser

# simple class that handles the parsed OSM data.
class HighwayCounter(object):
    highways = 0

    def ways(self, ways):
        # callback method for ways
        for osmid, tags, refs in ways:
            if 'highway' in tags:
              self.highways += 1

class NodeClass(object):
    node_list = []

    def nodes(self, nodes):
        for osmid, tags, refs in nodes:
            if 'sport' in tags:
                lng, lat = refs
                a = {"long": "{0:.7f}".format(lng), "lat": "{0:.7f}".format(lat)}
                tags.update(a)
                self.node_list.append(tags)

# instantiate counter and parser and start parsing
counter = NodeClass()
p = OSMParser(concurrency=4, nodes_callback=counter.nodes)
p.parse(osm_file_path)


print json.dumps(counter.node_list)
# print counter.node_list
