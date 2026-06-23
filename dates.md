---
title: Date and Time Types
description: Date, time, datetime, timedelta, and duration field types
---

## Date and Datetime

```python
from datetime import date, datetime, time, timedelta
from pydantic import BaseModel

class Event(BaseModel):
    name: str
    date: date
    start_time: datetime
    end_time: datetime | None = None
    duration: timedelta
```

## Date Validation

```python
class Schedule(BaseModel):
    event_date: date = Field(ge=date(2024, 1, 1))
    timestamp: datetime
    meeting_time: time
```

## Past and Future

Use validators for relative date constraints:

```python
from datetime import datetime, timezone
from pydantic import field_validator

class Post(BaseModel):
    title: str
    created_at: datetime
    published_at: datetime | None = None

    @field_validator("created_at")
    @classmethod
    def not_future(cls, v: datetime) -> datetime:
        if v > datetime.now(timezone.utc):
            raise ValueError("Date cannot be in the future")
        return v
```

## Duration

```python
class Task(BaseModel):
    name: str
    estimated: timedelta = timedelta(hours=1)
    deadline: datetime
```
