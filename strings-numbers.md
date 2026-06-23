---
title: String and Number Types
description: Pydantic field types for strings, numbers, and booleans
---

## String Types

```python
from pydantic import BaseModel
from pydantic.types import StringConstraints
from typing import Annotated

class StringModel(BaseModel):
    name: str
    code: Annotated[str, StringConstraints(min_length=3, max_length=10)]
    pattern: Annotated[str, StringConstraints(pattern=r"^[A-Z]+$")]
    email: str  # validated by email-validator if installed
```

## Number Types

```python
class NumberModel(BaseModel):
    age: int
    price: float
    rating: float = 0.0
    
    # Constrained numbers
    positive: int = Field(gt=0)
    non_negative: int = Field(ge=0)
    percentage: float = Field(ge=0, le=100)
    multiple: int = Field(multiple_of=5)
```

## Boolean

```python
class BooleanModel(BaseModel):
    is_active: bool
    is_admin: bool = False
```

Booleans accept `True`, `False`, `1`, `0`, `"true"`, `"false"`, `"yes"`, `"no"`, `"on"`, `"off"` by default.
