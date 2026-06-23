---
title: Basic Usage
description: Create your first Pydantic model and validate data
---

## Define a Model

Create a model by inheriting from `BaseModel`:

```python
from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    email: str
    is_active: bool = True
```

## Validate Data

Pass data as keyword arguments:

```python
user = User(name="Alice", age=30, email="alice@example.com")
print(user)
# name='Alice' age=30 email='alice@example.com' is_active=True
```

## JSON Parsing

Parse data from a JSON string or dict:

```python
data = '{"name": "Bob", "age": 25, "email": "bob@test.com"}'
user = User.model_validate_json(data)
```

## Access Fields

```python
print(user.name)    # "Alice"
print(user.age)     # 30
print(user.model_dump())  # dict
print(user.model_dump_json())  # JSON string
```
