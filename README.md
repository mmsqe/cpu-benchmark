cpu benchmark on JSON.stringify and its alternatives.

A 524.288019 MB JSON string takes up to 100% CPU on my 3.5 GHz Quad-Core Intel Core i5 
when it is being stringified with `JSON.stringify`.

A half sized (209.715219 MB) JSON string takes up to 100% CPU with the yieldable-json library too.

You can replicate normal JSON.stringify by 
```
docker build -t sugar/cpu-benchmark .
docker run sugar/cpu-benchmark:latest
docker stats
```

You can replicate yieldable-json by 
- (make sure your toggle the Docker>preferences>Advanced memory section to be larger than 8GB first)
```
docker build -f Dockerfile-yieldable -t sugar/cpu-benchmark-yieldable .
docker run -m=8g sugar/cpu-benchmark-yieldable:latest
docker stats
```

```
docker build -f Dockerfile-stream -t sugar/cpu-benchmark-stream .
docker run -m=8g sugar/cpu-benchmark-stream:latest
docker stats
```

```
docker build -f Dockerfile-fast -t sugar/cpu-benchmark-fast .
docker run -m=8g sugar/cpu-benchmark-fast:latest
docker stats
```