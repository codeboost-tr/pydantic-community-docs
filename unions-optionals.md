---
title: Unions and Optional Types
description: Union types, Optional, and nullable fields in Pydantic
---

## Optional Fields

```python
class Profile(BaseModel):
    name: str
    bio: str | None = None          # Optional[str]
    age: int | None = None          # Optional[int]
```

## Union Types

```python
class Result(BaseModel):
    value: str | int | float         # any of these types
    status: int | str                # int or string
```

## Discriminated Unions

Use `Discriminator` for tagged unions:

```python
from pydantic import BaseModel, Discriminator
from typing import Literal, Union

class Cat(BaseModel):
    pet_type: Literal["cat"]
    meows: bool

class Dog(BaseModel):
    pet_type: Literal["dog"]
    barks: bool

class Pet(BaseModel):
    pet: Cat | Dog = Field(discriminator="pet_type")
```

## None Handling

```python
class NullableModel(BaseModel):
    required: str
    nullable: str | None = None
    optional_default: str = "default"
    
    # model_config = ConfigDict(coerce_numbers_to_str=True)
```
