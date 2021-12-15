# What is this?

`server-drumsolo` is a way to hear your server (in the form of a drum solo!) in real-time with piped data from your server logs via stdin

# How to use

The most rudimentary use cases are as follows:
```
$echo GET | npx server-drumsolo
```

```
$echo POST | npx server-drumsolo
```


# Practical examples

```
$tail -f myserverlogs.txt | npx server-drumsolo
```
```
$cat myserverlogs.txt | npx server-drumsolo
```
```
$./myserver | npx server-drumsolo
```



