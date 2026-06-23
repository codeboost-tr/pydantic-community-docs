---
title: Collections and Mapping Types
description: List, set, dict, tuple, and other collection types in Pydantic
---

## Lists

```python
class Team(BaseModel):
    members: list[str]           # list of strings
    scores: list[int]            # list of integers
    nested: list[list[float]]    # nested lists
```

## Sets

```python
class Tags(BaseModel):
    tags: set[str]               # unique strings
    unique_ids: set[int]         # unique integers
```

## Dictionaries

```python
class Metadata(BaseModel):
    properties: dict[str, str]         # string -> string
    counts: dict[str, int]             # string -> int
    complex: dict[str, list[float]]    # string -> list of floats
```

## Tuples

```python
class Coordinate(BaseModel):
    point: tuple[float, float]         # exactly 2 floats
    named: tuple[str, int, bool]       # mixed types
    variadic: tuple[int, ...]          # variable length
```

## FrozenSet

```python
class Config(BaseModel):
    allowed: frozenset[str]
```

## TypedDict Support

```python
from typing import TypedDict

class Movie(TypedDict):
    title: str
    year: int

class Catalog(BaseModel):
    movies: list[Movie]
```
