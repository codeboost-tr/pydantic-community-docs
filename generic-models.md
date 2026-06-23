---
title: Generic Models
description: Create reusable generic models with type parameters in Pydantic
---

## Generic BaseModel

```python
from typing import Generic, TypeVar
from pydantic import BaseModel

T = TypeVar("T")

class Response(BaseModel, Generic[T]):
    data: T
    message: str
    status: int = 200
```

## Usage

```python
# String response
str_resp = Response[str](data="hello", message="ok")

# Dict response
dict_resp = Response[dict](data={"key": "value"}, message="found")

# Nested generic
class Page(BaseModel, Generic[T]):
    items: list[T]
    total: int
    page: int

user_page = Page[User](items=[user1, user2], total=2, page=1)
```

## Multiple Type Parameters

```python
K = TypeVar("K")
V = TypeVar("V")

class MapEntry(BaseModel, Generic[K, V]):
    key: K
    value: V

entry = MapEntry[int, str](key=1, value="one")
```
