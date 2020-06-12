# Work day scheduler

The live app cab be accessed here: https://bdcoelho.github.io/Calendar/

This is a simple work day scheduler that allows a user to enter tasks in hour long blocks. The tasks are saved on the browser's local storage and will not be lost on refresh or reopening of the browser. A live date and time up to the minute is displayed at the top of the page. The time display is refreshed at intervals of a second. This keeps the time current while limiting CPU usage. The scheduler interface is formatted to highlight the current, past and future hours. The page and formatting is automatically refreshed at the start of every hour. Most of the page content is generated live using javascript. This is done to facilitate the quick and easy implementation of the items under Future Work. A more efficient method of live formatting will be covered under Future Work. 

## Usage

The user may enter tasks for each hour of the work day. A buffer of 1 hour is provided to add tasks at the start or finish of the regular work day. On clicking save, the data in the schedular is saved in local storage. The user will have access to it even if the browser is refreshed or reopened. Individual tasks can be cleared or modified by editing the text in each hour block. A button provided at the bottom of the page will clear all tasks.

## Project brief

The following sub-sections summarize the user requirements.

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Future work

* Add a full/multi-year calendar to schedule tasks on days in the future and view all tasks
* Allow the user to customize the start and finish time of the work day
* Change element formatting to highlight current, past and future hours using **javascript** rather than **refresh** to minimize data usage
* Highlight public holidays
* Add email and web reminders