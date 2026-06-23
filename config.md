---
title: Configuration
description: Model configuration with ConfigDict for behavior customization
---

## ConfigDict

Use `model_config` to control model behavior:

```python
from pydantic import BaseModel, ConfigDict

class Settings(BaseModel):
    model_config = ConfigDict(
        frozen=True,        # immutable after creation
        str_strip_whitespace=True,
        validate_default=True,
        extra="forbid",     # reject unknown fields
    )
    name: str
    value: int
```

## Common Options

```python
class Config(BaseModel):
    model_config = ConfigDict(
        # Validation
        extra="ignore",        # ignore extra fields (default)
        extra="forbid",        # reject extra fields
        extra="allow",         # allow extra fields
        frozen=True,           # make immutable
        populate_by_name=True, # allow by field name or alias
        
        # String handling
        str_strip_whitespace=True,
        str_to_lower=True,
        str_to_upper=False,
        
        # Type coercion
        coerce_numbers_to_str=True,
        
        # Error handling
        hide_input_in_errors=True,
    )
```

## Alias Generator

```python
class Model(BaseModel):
    model_config = ConfigDict(
        alias_generator=lambda s: s.upper(),
        populate_by_name=True,
    )
    first_name: str  # accepts "firstName" or "FIRST_NAME"
```
